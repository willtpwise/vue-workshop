import { shallowMount, createLocalVue } from "@vue/test-utils";
import Counter from "../../../../src/components/Counter.vue";
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Counter.vue', () => {
    const wrapperMaker = (list) => {
        return shallowMount(Counter, {
            localVue,
            store: new Vuex.Store({
                state: {
                    list,
                },
                getters: {
                    todoList: () => {
                        return list
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

    it('should return the list', () => {
        const tasks = [];
        const wrapper = wrapperMaker(tasks);
        const cm = wrapper.vm;
        expect(cm.list).toEqual(tasks)
    })
    it('should have the correct total done for task list', () => {
        const tasks = [
            {
                done: true,
                name: 'asdasd'
            },
            {
                done: false,
                name: 'not done'
            },
        ];
        const wrapper = wrapperMaker(tasks);
        const cm = wrapper.vm;
        expect(cm.list).toEqual(tasks)
        expect(cm.totalDone).toEqual(1)
    })
    it('should have the correct total done for task list', () => {
        const tasks = [
            {
                done: false,
                name: 'asdasd'
            },
            {
                done: false,
                name: 'not done'
            },
        ];
        const wrapper = wrapperMaker(tasks);
        const cm = wrapper.vm;
        expect(cm.list).toEqual(tasks)
        expect(cm.totalDone).toEqual(0)
    })
    it('should have the correct total done for task list', () => {
        const tasks = [
            {
                done: true,
                name: 'done'
            },
            {
                done: true,
                name: 'done2'
            },
        ];
        const wrapper = wrapperMaker(tasks);
        const cm = wrapper.vm;
        expect(cm.list).toEqual(tasks)
        expect(cm.totalDone).toEqual(2)
    })
})