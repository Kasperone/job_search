import { shallowMount } from "@vue/test-utils";
import ProfileImage from "@/components/Navigation/ProfileImage";

describe("ProfileImage", () => {
  it("rednders", () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
