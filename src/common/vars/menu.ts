import {MenutItem} from "../types/menu"


export const menuItems: Array<MenutItem> = [
    {
        path: "/index",
        key: "index",
        name: "首页",
        component: "2323"
    },
    {
        path: "/device",
        key: "device",
        name: "资产管理",
        component: "2323",
        subItems: [
            {
                path: "/device/network",
                key: "device-network",
                name: "网络设备",
                component: "2323",
                subItems: [
                    {path: "/device/network/firewall", key: "device-network-firewall", name: "防火墙", component: "2323"},
                    {path: "/device/network/switch", key: "device-network-switch", name: "交换机", component: "2323"},
                    {path: "/device/network/router", key: "device-network-router", name: "路由器", component: "2323"},
                    {
                        path: "/device/network/load-balance",
                        key: "device-network-balance",
                        name: "负载均衡",
                        component: "2323"
                    },
                ]
            },
            {
                path: "/device/server",
                key: "device-server",
                name: "服务器",
                component: "dfdf3",
                subItems: [
                    {path: "/device/server/linux", key: "device-server-linux", name: "linux", component: "2323"},
                    {path: "/device/server/unix", key: "device-server-unix", name: "unix", component: "2323"},
                    {path: "/device/server/window", key: "device-server-windows", name: "windows", component: "2323"},
                ]
            },
            {
                path: "/device/database",
                key: "device-database",
                name: "数据库",
                component: "dfdf3",
                subItems: [
                    {path: "/device/database/oracle", key: "device-database-oracle", name: "Oracle", component: "2323"},
                    {path: "/device/database/mysql", key: "device-database-mysql", name: "Mysql", component: "2323"},
                    {
                        path: "/device/database/postgresql",
                        key: "device-database-postgresql",
                        name: "PostgreSql",
                        component: "2323"
                    },
                    {
                        path: "/device/database/mongodb",
                        key: "device-database-mongodb",
                        name: "MongoDB",
                        component: "2323"
                    },
                ]
            }
        ]
    },
    {
        path: "/line",
        key: "line",
        name: "线路管理",
        component: "2323"
    },
    {
        path: "/task",
        key: "task",
        name: "任务中心",
        component: "",
        subItems: [
            {path: "/task/backup", key: "task-backup", name: "配置备份", component: "2323"},
            {path: "/task/order", key: "task-order", name: "工单实施", component: "2323"},
            {path: "/task/data-life", key: "task-data-life", name: "数据周期", component: "2323"},
            {path: "/task/line-check", key: "task-line-check", name: "线路巡检", component: "2323"},
        ]
    },
    {
        path: "/log",
        key: "log",
        name: "日志中心",
        component: "2323"
    },
    {
        path: "/system",
        key: "system",
        name: "系统中心",
        component: "2323",
        subItems: [
            {
                path: "/system/user",
                key: "system-user",
                name: "用户管理",
                component: "2323",
            },
            {
                path: "/system/role",
                key: "system-role",
                name: "角色管理",
                component: "2323",
            },
            {
                path: "/system/role",
                key: "system-zone",
                name: "地域分组",
                component: "2323",
            },
            {
                path: "/system/environment",
                key: "system-environment",
                name: "系统变量",
                component: "2323",
            },
        ]
    },
];