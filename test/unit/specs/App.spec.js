import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "../../../src/App.vue";
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App.vue', () => {
    const wrapperMaker = (list) => {
        return shallowMount(App, {
            localVue,
            store: new Vuex.Store({
                state: {
                    list,
                },
                getters: {
                    todoList: () => {
                        return list
                    },
                    doneCount: () => {
                        return list.length
                    }
                },
                mutations: {
                    setList: jest.fn(),
                    toggleItem: jest.fn(),
                    addItem: jest.fn(),
                },
                actions: {
                    fetchList: jest.fn()
                },
            })
        });
    }
    it('should mount the component', () => {
        const wrapper = wrapperMaker([]);
        expect(wrapper.isVueInstance()).toBeTruthy();
    })
    
    it('should have correct total done for no entry list', () => {
        const tasks = [];
        const wrapper = wrapperMaker(tasks);
        const cm = wrapper.vm;
        expect(cm.totalDone).toEqual(0);
        expect(cm.list).toBe(tasks);
    })
    it('should toggle the value of the correct task when clicked', () => {
        const task0 = { done: true, name: 'test' };
        const task1 = { done: false, name: 'test' };
        const tasks = [task0, task1];
        
        const task0done = task0.done;
        const task1done = task1.done;

        const wrapper = wrapperMaker(tasks);
        wrapper.vm.toggleDone({item: task0})
        expect(task0).not.toEqual(task0done)

        wrapper.vm.toggleDone({item: task1})
        expect(task1).not.toEqual(task1done)
        
    })
})