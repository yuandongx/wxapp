export  interface MenutItem {
    path: string,
    name: string,
    key: string,
    component: string,
    subItems?: Array<MenutItem>
}