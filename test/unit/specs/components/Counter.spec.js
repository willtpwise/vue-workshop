import { shallowMount, createLocalVue } from "@vue/test-utils";
import Counter from "../../../../src/components/Counter.vue";
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Counter.vue', () => {
    const wrapperMaker = (done, total) => {
        return shallowMount(Counter, {
            propsData: { done, total }
        });
    }
    describe('correct percentage', () => {
        it('should be correct for 0 done of 1', () => {
            const wrapper = wrapperMaker(0, 1)
            expect(wrapper.vm.percent).toEqual(0);
        })
        it('should be correct for 1 done of 2', () => {
            const wrapper = wrapperMaker(1, 2)
            expect(wrapper.vm.percent).toEqual(50);
        })
        it('should be correct for 3 done of 4', () => {
            const wrapper = wrapperMaker(3, 4)
            expect(wrapper.vm.percent).toEqual(75);
        })
    })
    it('should not divide by 0', () => {
        const wrapper = wrapperMaker(0, 0)
        expect(wrapper.vm.percent).toEqual(0);
    })
})