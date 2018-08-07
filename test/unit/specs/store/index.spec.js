import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import store from "../../../../src/store";


const localVue  = createLocalVue();
localVue.use(Vuex)

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
})