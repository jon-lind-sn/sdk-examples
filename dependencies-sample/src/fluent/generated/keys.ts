import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'cat-item-1': {
                        table: 'sc_cat_item'
                        id: 'fb5899485c084748ba80b34047401990'
                    }
                    edit_in_catalog_builder: {
                        table: 'sys_ui_action'
                        id: '42826fea22d74c3e881e687d345e77a1'
                    }
                    edit_in_catalog_builder_role: {
                        table: 'sys_ui_action_role'
                        id: 'a2c24893e3784fd9a73ce22b5e357bbb'
                    }
                }
            }
        }
    }
}