import { shallowMount } from "@vue/test-utils";
import UploadFile from "@/components/UploadFile.vue";

describe("UploadFile.vue", () => {
  it("match snapshot", () => {
    const wrapper = shallowMount(UploadFile);
    expect(wrapper).toMatchSnapshot();
  });
});
