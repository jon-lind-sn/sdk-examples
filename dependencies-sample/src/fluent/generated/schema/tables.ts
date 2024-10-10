// Generated by ServiceNow SDK

import '@servicenow/sdk/global'
import { Table } from '@servicenow/sdk/core'
import { sys_ui_action } from './global/sys_ui_action'
import { sc_cat_item } from './global/sc_cat_item'
import { sys_ui_action_role } from './global/sys_ui_action_role'
import { sys_metadata } from './global/sys_metadata'
declare global {
    namespace Now {
        namespace Internal {
            namespace TableSchemas {
                interface sys_ui_action extends Helper<typeof sys_ui_action> {}
                interface sc_cat_item extends Helper<typeof sc_cat_item> {}
                interface sys_ui_action_role extends Helper<typeof sys_ui_action_role> {}
                interface sys_metadata extends Helper<typeof sys_metadata> {}
            }
            interface Tables {
                sys_ui_action: Table<TableSchemas.sys_ui_action, 'sys_metadata'>
                sc_cat_item: Table<TableSchemas.sc_cat_item, 'sys_metadata'>
                sys_ui_action_role: Table<TableSchemas.sys_ui_action_role, 'sys_metadata'>
                sys_metadata: Table<TableSchemas.sys_metadata>
            }
        }
    }
}