import { shallowMount, createLocalVue } from "@vue/test-utils";
import Task from "../../../../src/components/Task.vue";
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Task.vue', () => {
    const wrapperMaker = (list, item, toggler) => {
        return shallowMount(Task, {
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
                    toggleItem: toggler,
                    addItem: jest.fn(),
                },
                actions: {
                    fetchList: jest.fn()
                },
            }),
            propsData: {
                item
            }
        });
    }
    it('should call toggle in the store', () => {
        const toggler = jest.fn();
        const item = { done: false, name: 'test' }
        const tasks = [item];
        const wrapper = wrapperMaker(tasks, item, toggler);
        const cm = wrapper.vm;
        expect(toggler).not.toHaveBeenCalled()
        cm.toggle()
        expect(toggler).toHaveBeenCalled()
    })
})