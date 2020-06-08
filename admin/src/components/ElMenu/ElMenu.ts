import { defineComponent, h, mergeProps, reactive } from 'vue'
import { useElMenu } from './hooks'
import { ElMenuOptions, ElMenuProps } from './interface'

export default defineComponent({
  name: 'ElMenu',
  props: {
    mode: String,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    trigger: String,
    collapse: Boolean
  },
  setup(props: ElMenuProps, { attrs, slots, emit }) {
    const state = reactive<ElMenuOptions>({
      mode: props.mode || 'vertical',
      backgroundColor: props.backgroundColor || '',
      textColor: props.textColor || '',
      activeTextColor: props.activeTextColor || '',
      trigger: props.trigger || 'hover',
      collapse: props.collapse || false,
      isPopup:
        props.mode === 'horizontal' ||
        !!(props.mode === 'vertical' && props.collapse),
      activeIndex: -1,
      items: [],
      openedMenus: []
    })

    useElMenu(state)

    return () => {
      return (
        h(
          'ul',
          mergeProps(
            {
              style: { backgroundColor: state.backgroundColor || '' },
              class: {
                'el-menu--horizontal': state.mode === 'horizontal',
                'el-menu': true
              }
            },
            attrs
          )
        ),
        slots.default?.()
      )
    }
  }
})
