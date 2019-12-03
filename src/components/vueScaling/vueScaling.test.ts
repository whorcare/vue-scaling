import { mount } from '@vue/test-utils';
import vueScale from './vueScale.vue';

describe('vueScale.vue', () => {
  let wrapperHeight:any = null;
  let wrapperWidth:any = null;
  let wrapperMaxScale:any = null;

  beforeEach(() => {
    wrapperHeight = mount(vueScale, {
      propsData: {
        height: 400,
      },
      attachToDocument: true,
    });
    wrapperWidth = mount(vueScale, {
      propsData: {
        width: 400,
      },
      attachToDocument: true,
    });
    wrapperMaxScale = mount(vueScale, {
      propsData: {
        maxScale: 2,
      },
      attachToDocument: true,
    });
  });

  it('test height props', (done) => {
    wrapperHeight.vm.$nextTick(() => {
      try {
        setTimeout(() => {
          expect(wrapperHeight.vm.height).toBe(400);
          wrapperHeight.destroy();
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test width props', (done) => {
    wrapperWidth.vm.$nextTick(() => {
      try {
        setTimeout(() => {
          expect(wrapperHeight.vm.height).toBe(400);
          wrapperHeight.destroy();
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('test maxScale props', (done) => {
    wrapperMaxScale.vm.$nextTick(() => {
      try {
        setTimeout(() => {
          expect(wrapperMaxScale.vm.maxScale).toBe(2);
          wrapperMaxScale.destroy();
          done();
        }, 0);
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
