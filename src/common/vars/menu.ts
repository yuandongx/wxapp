import { MenutItem } from "../types/menu"


export const menutItems: Array<MenutItem> = [
    {
        path: "11",
        key: "1",
        name: "sdf",
        component: "2323"
    },
    {
        path: "2",
        key: "2",
        name: "adcdv",
        component: "2323",
        subItems: [
            {path: "2.1", key: "2.1", name: "23ds", component: "2323" },
            {path: "2.2", key: "2.2", name: "23dsdd", component: "2323" },
        ]
    },
    {
        path: "3",
        key: "3",
        name: "fdf3",
        component: "dfdf3",
        subItems: [
            {path: "3.1", key: "2.1", name: "23ds", component: "2323" },
            {path: "3.2", key: "2.2", name: "23dsdd", component: "2323", subItems: [
                {path: "3.2.2", key: "2.2", name: "23dsdd", component: "2323" },
            ] },
        ]
    }
];