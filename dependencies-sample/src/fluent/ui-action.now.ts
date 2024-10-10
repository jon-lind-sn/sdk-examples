import { Record } from '@servicenow/sdk/core'

// Use the sys_ui_action table dependency that was downloaded

const action = Record({
    $id: Now.ID['edit_in_catalog_builder'],
    table: 'sys_ui_action',
    data: {
        action_name: 'edit_in_catalog_builder',
        name: 'Edit in Catalog Builder',
        order: 600,
        active: true,
        form_button: true,
        form_context_menu: true,
        show_insert: true,
        show_update: true,
        client: true,
        ui11_compatible: true,
        form_style: 'primary',
        onclick: script`openItemInCatalogBuilder()`,
        condition: script`new global.ServiceCatalogVersioningUtils().canEditInBuilder(current)`,
        script: script`
          function openItemInCatalogBuilder() {
            var checkoutUtil = new GlideAjax('ServiceCatalogVersioningUtils');
            checkoutUtil.addParam('sysparm_name','checkoutItem');
            checkoutUtil.addParam('itemId', g_form.getUniqueValue());
            checkoutUtil.getXMLAnswer(navigateToBuilder);
          }
          
          function navigateToBuilder(url) {
            if (url) {
              g_navigation.openPopup(url);
              g_navigation.reloadWindow();
            }
          
          }`,
    },
})

//Map the ui action to a role
Record({
    $id: Now.ID['edit_in_catalog_builder_role'],
    table: 'sys_ui_action_role',
    data: {
        sys_user_role: '2831a114c611228501d4ea6c309d626d', //admin
        sys_ui_action: action,
    },
})