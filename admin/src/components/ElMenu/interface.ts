export interface ElMenuProps {
  mode?: 'horizontal' | 'vertical'
  backgroundColor?: string
  textColor?: string
  activeTextColor?: string
  trigger?: 'click' | 'hover'
  collapse?: Boolean
}

export interface ElMenuOptions extends Required<ElMenuProps> {
  isPopup: boolean
  activeIndex: number
  items: any[]
  openedMenus: any[]
}
