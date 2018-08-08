import store from "../../../../src/store";

jest.mock('axios', () => {
    return {
        get: (url) => {
            return Promise.resolve({
                data: [
                    { done: true, name: 'task1', },
                    { done: false, name: 'task2', },
                    { done: false, name: 'task3', },
                ]
            });
        }
    }
})
describe('store', () => {
    it('should toggle correct item if toggleItem is called', async () => {
        const list = await store.dispatch('fetchList');
        store.commit('setList', { list })
        const idx = 0;
        const testIsDone = !!list[idx].done;
        store.commit('toggleItem', { item: list[idx] })
        expect(store.getters['todoList'][idx].done).not.toEqual(testIsDone);
    })

    it('should add item properly', async () => {
        const list = await store.dispatch('fetchList');
        
        store.commit('setList', { list })
        let test4 = { done: true, name: 'test4' };
        const idx = list.length;
        store.commit('addItem', { item: test4 })
        expect(store.getters['todoList'][idx]).toEqual(test4);
        expect(store.getters['todoList'].length).toEqual(idx + 1);
    })
    it('should have correct doneCount', () => {
        store.commit('setList', { list: [
            { done: true, name: 'test' },
            { done: true, name: 'test' },
            { done: true, name: 'test' },
        ]})
        expect(store.getters['doneCount']).toEqual(3)
        
        store.commit('setList', { list: []})
        expect(store.getters['doneCount']).toEqual(0)
        
        store.commit('setList', { list: [
            { done: false, name: 'test' },
            { done: false, name: 'test' },
            { done: true, name: 'test' },
        ]})
        expect(store.getters['doneCount']).toEqual(1)
    })
})