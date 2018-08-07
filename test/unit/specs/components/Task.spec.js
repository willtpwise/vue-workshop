import { shallowMount } from "@vue/test-utils";
import Task from "../../../../src/components/Task.vue";

describe('Task.vue', () => {
    const wrapperMaker = (item) => {
        return shallowMount(Task, {
            propsData: {
                item
            }
        });
    }
    it('should call emit the toggle-done with item', () => {
        const item = { done: false, name: 'test' }
        const wrapper = wrapperMaker(item);
        expect(wrapper.isVueInstance()).toBeTruthy();

        expect(wrapper.emitted('toggle-done')).toBeFalsy();
        wrapper.vm.toggle();
        const evt = wrapper.emitted('toggle-done');
        expect(evt).toBeTruthy();
        expect(evt[0][0].item).toEqual(item)
    })
    
})