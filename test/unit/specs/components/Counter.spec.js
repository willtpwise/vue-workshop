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

    describe('correct percentage', () => {
        it('should have percent 100 when all done', () => {
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
            expect(cm.percent).toEqual(100);
        })
        it('should have percent 0 when none done', () => {
            const tasks = [
                {
                    done: false,
                    name: 'done'
                },
                {
                    done: false,
                    name: 'done2'
                },
            ];
            const wrapper = wrapperMaker(tasks);
            const cm = wrapper.vm;
            expect(cm.percent).toEqual(0);
        })
    })

    it('should not divide by 0', () => {
        const tasks = [];
        const wrapper = wrapperMaker(tasks);
        expect(wrapper.isVueInstance()).toBeTruthy();
    })
})