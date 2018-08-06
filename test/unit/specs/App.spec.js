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
    it('should have correct total done and list', () => {
        const tasks = [{ done: true, name: 'test' }];
        const wrapper = wrapperMaker(tasks);
        const cm = wrapper.vm;
        expect(cm.totalDone).toEqual(1);
        expect(cm.list).toBe(tasks);
    })
    it('should have correct total done for no entry list', () => {
        const tasks = [];
        const wrapper = wrapperMaker(tasks);
        const cm = wrapper.vm;
        expect(cm.totalDone).toEqual(0);
        expect(cm.list).toBe(tasks);
    })
})