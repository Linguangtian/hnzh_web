var siteinfo = require("../siteinfo.js"), _api_root = "";

if (-1 != siteinfo.acid) {
    var siteroot = siteinfo.siteroot.substr(0, siteinfo.siteroot.indexOf("app/index.php"));
    _api_root = _api_root = siteroot + "addons/zjhj_mall/core/web/index.php?_acid=" + siteinfo.acid + "&r=api/";
} else _api_root = siteinfo.apiroot;

var api = {
    index: _api_root + "default/index",
    default: {
        store: _api_root + "default/store",
        index: _api_root + "default/index",
        goods_list: _api_root + "default/goods-list",
        cat_list: _api_root + "default/cat-list",
        goods: _api_root + "default/goods",
        district: _api_root + "default/district",
        goods_attr_info: _api_root + "default/goods-attr-info",
        upload_image: _api_root + "default/upload-image",
        comment_list: _api_root + "default/comment-list",
        article_list: _api_root + "default/article-list",
        article_detail: _api_root + "default/article-detail",
        video_list: _api_root + "default/video-list",
        goods_qrcode: _api_root + "default/goods-qrcode",
        coupon_list: _api_root + "default/coupon-list",
        topic_list: _api_root + "default/topic-list",
        topic: _api_root + "default/topic",
        navbar: _api_root + "default/navbar",
        navigation_bar_color: _api_root + "default/navigation-bar-color",
        shop_list: _api_root + "default/shop-list",
        shop_detail: _api_root + "default/shop-detail",
        topic_type: _api_root + "default/topic-type",
        buy_data: _api_root + "default/buy-data",
        goods_recommend: _api_root + "default/goods-recommend",
        search: _api_root + "default/search",
        cats: _api_root + "default/cats",
        topic_qrcode: _api_root + "default/topic-qrcode",
        form_id: _api_root + "default/form-id"
    },
    cart: {
        list: _api_root + "cart/list",
        add_cart: _api_root + "cart/add-cart",
        delete: _api_root + "cart/delete",
        cart_edit: _api_root + "cart/cart-edit"
    },
    passport: {
        login: _api_root + "passport/login",
        on_login: _api_root + "passport/on-login"
    },
    order: {
        submit_preview: _api_root + "order/submit-preview",
        submit: _api_root + "order/submit",
        pay_data: _api_root + "order/pay-data",
        list: _api_root + "order/list",
        revoke: _api_root + "order/revoke",
        confirm: _api_root + "order/confirm",
        count_data: _api_root + "order/count-data",
        detail: _api_root + "order/detail",
        refund_preview: _api_root + "order/refund-preview",
        refund: _api_root + "order/refund",
        refund_detail: _api_root + "order/refund-detail",
        comment_preview: _api_root + "order/comment-preview",
        comment: _api_root + "order/comment",
        express_detail: _api_root + "order/express-detail",
        clerk: _api_root + "order/clerk",
        clerk_detail: _api_root + "order/clerk-detail",
        get_qrcode: _api_root + "order/get-qrcode",
        location: _api_root + "order/location",
        refund_send: _api_root + "order/refund-send",
        new_submit_preview: _api_root + "order/new-submit-preview",
        new_submit: _api_root + "order/new-submit"
    },

    xiaofeigu: {
        list: _api_root + "xiaofeigu/list",
    },


    user: {
        address_list: _api_root + "user/address-list",
        address_detail: _api_root + "user/address-detail",
        address_save: _api_root + "user/address-save",
        address_set_default: _api_root + "user/address-set-default",
        address_delete: _api_root + "user/address-delete",
        save_form_id: _api_root + "user/save-form-id",
        favorite_add: _api_root + "user/favorite-add",
        favorite_remove: _api_root + "user/favorite-remove",
        favorite_list: _api_root + "user/favorite-list",
        index: _api_root + "user/index",
        wechat_district: _api_root + "user/wechat-district",
        add_wechat_address: _api_root + "user/add-wechat-address",
        topic_favorite: _api_root + "user/topic-favorite",
        topic_favorite_list: _api_root + "user/topic-favorite-list",
        member: _api_root + "user/member",
        card: _api_root + "user/card",
        card_qrcode: _api_root + "user/card-qrcode",
        card_clerk: _api_root + "user/card-clerk",
        web_login: _api_root + "user/web-login",
        submit_member: _api_root + "user/submit-member",
        user_binding: _api_root + "user/user-binding",
        user_hand_binding: _api_root + "user/user-hand-binding",
        user_empower: _api_root + "user/user-empower",
        sms_setting: _api_root + "user/sms-setting",
        authorization_bind: _api_root + "user/authorization-bind",
        check_bind: _api_root + "user/check-bind",
        card_detail: _api_root + "user/card-detail"
    },
    share: {
        join: _api_root + "share/join",
        check: _api_root + "share/check",
        get_info: _api_root + "share/get-info",
        get_price: _api_root + "share/get-price",
        apply: _api_root + "share/apply",
        cash_detail: _api_root + "share/cash-detail",
        get_qrcode: _api_root + "share/get-qrcode",
        shop_share: _api_root + "share/shop-share",
        bind_parent: _api_root + "share/bind-parent",
        get_team: _api_root + "share/get-team",
        get_order: _api_root + "share/get-order",
        index: _api_root + "share/index"
    },
    coupon: {
        index: _api_root + "coupon/index",
        share_send: _api_root + "coupon/share-send",
        receive: _api_root + "coupon/receive",
        coupon_detail: _api_root + "coupon/detail"
    },
    miaosha: {
        list: _api_root + "miaosha/list",
        goods_list: _api_root + "miaosha/goods-list",
        details: _api_root + "miaosha/details",
        submit_preview: _api_root + "miaosha/submit-preview",
        submit: _api_root + "miaosha/submit",
        pay_data: _api_root + "miaosha/pay-data",
        order_list: _api_root + "miaosha/order-list",
        order_details: _api_root + "miaosha/order-details",
        order_revoke: _api_root + "miaosha/revoke",
        express_detail: _api_root + "miaosha/express-detail",
        confirm: _api_root + "miaosha/confirm",
        comment_preview: _api_root + "miaosha/comment-preview",
        comment: _api_root + "miaosha/comment",
        refund_preview: _api_root + "miaosha/refund-preview",
        refund: _api_root + "miaosha/refund",
        refund_detail: _api_root + "miaosha/refund-detail",
        comment_list: _api_root + "miaosha/comment-list",
        goods_qrcode: _api_root + "miaosha/goods-qrcode"
    },
    group: {
        index: _api_root + "group/index/index",
        list: _api_root + "group/index/good-list",
        details: _api_root + "group/index/good-details",
        goods_attr_info: _api_root + "group/index/goods-attr-info",
        submit_preview: _api_root + "group/order/submit-preview",
        submit: _api_root + "group/order/submit",
        pay_data: _api_root + "group/order/pay-data",
        order: {
            list: _api_root + "group/order/list",
            detail: _api_root + "group/order/detail",
            express_detail: _api_root + "group/order/express-detail",
            comment_preview: _api_root + "group/order/comment-preview",
            comment: _api_root + "group/order/comment",
            confirm: _api_root + "group/order/confirm",
            goods_qrcode: _api_root + "group/order/goods-qrcode",
            get_qrcode: _api_root + "group/order/get-qrcode",
            clerk: _api_root + "group/order/clerk",
            clerk_order_details: _api_root + "group/order/clerk-order-details",
            revoke: _api_root + "group/order/revoke",
            refund_preview: _api_root + "group/order/refund-preview",
            refund: _api_root + "group/order/refund",
            refund_detail: _api_root + "group/order/refund-detail"
        },
        group_info: _api_root + "group/order/group",
        comment: _api_root + "group/index/goods-comment",
        goods_qrcode: _api_root + "group/index/goods-qrcode",
        search: _api_root + "group/index/search"
    },
    book: {
        index: _api_root + "book/index/index",
        list: _api_root + "book/index/good-list",
        details: _api_root + "book/index/good-details",
        submit_preview: _api_root + "book/order/submit-preview",
        submit: _api_root + "book/order/submit",
        order_list: _api_root + "book/order/list",
        order_cancel: _api_root + "book/order/cancel",
        order_pay: _api_root + "book/order/pay-data",
        order_details: _api_root + "book/order/order-details",
        shop_list: _api_root + "book/index/shop-list",
        get_qrcode: _api_root + "book/order/get-qrcode",
        clerk: _api_root + "book/order/clerk",
        apply_refund: _api_root + "book/order/apply-refund",
        comment_preview: _api_root + "book/order/comment-preview",
        submit_comment: _api_root + "book/order/comment",
        goods_comment: _api_root + "book/index/goods-comment",
        goods_qrcode: _api_root + "book/index/goods-qrcode",
        clerk_order_details: _api_root + "book/order/clerk-order-details",
        goods_attr_info: _api_root + "book/index/goods-attr-info"
    },
    quick: {
        quick: _api_root + "quick/quick/quick",
        quick_goods: _api_root + "quick/quick/quick-goods",
        quick_car: _api_root + "quick/quick/quick-car"
    },
    fxhb: {
        open: _api_root + "fxhb/index/open",
        open_submit: _api_root + "fxhb/index/open-submit",
        detail: _api_root + "fxhb/index/detail",
        detail_submit: _api_root + "fxhb/index/detail-submit"
    },
    recharge: {
        index: _api_root + "recharge/index",
        list: _api_root + "recharge/list",
        submit: _api_root + "recharge/submit",
        record: _api_root + "recharge/record",
        detail: _api_root + "recharge/detail"
    },
    mch: {
        apply: _api_root + "mch/index/apply",
        apply_submit: _api_root + "mch/index/apply-submit",
        shop: _api_root + "mch/index/shop",
        shop_list: _api_root + "mch/index/shop-list",
        shop_cat: _api_root + "mch/index/shop-cat",
        user: {
            myshop: _api_root + "mch/user/myshop",
            setting: _api_root + "mch/user/setting",
            setting_submit: _api_root + "mch/user/setting-submit",
            shop_qrcode: _api_root + "mch/user/shop-qrcode",
            account: _api_root + "mch/user/account",
            cash: _api_root + "mch/user/cash",
            account_log: _api_root + "mch/user/account-log",
            cash_log: _api_root + "mch/user/cash-log",
            tongji_year_list: _api_root + "mch/user/tongji-year-list",
            tongji_month_data: _api_root + "mch/user/tongji-month-data",
            cash_preview: _api_root + "mch/user/cash-preview",
            settle_log: _api_root + "mch/user/settle-log"
        },
        goods: {
            list: _api_root + "mch/goods/list",
            set_status: _api_root + "mch/goods/set-status",
            delete: _api_root + "mch/goods/delete"
        },
        order: {
            list: _api_root + "mch/order/list",
            detail: _api_root + "mch/order/detail",
            send: _api_root + "mch/order/send",
            refund: _api_root + "mch/order/refund",
            edit_price: _api_root + "mch/order/edit-price",
            refund_detail: _api_root + "mch/order/refund-detail"
        }
    },
    integral: {
        index: _api_root + "integralmall/integralmall/index",
        coupon_info: _api_root + "integralmall/integralmall/coupon-info",
        exchange_coupon: _api_root + "integralmall/integralmall/exchange-coupon",
        integral_pay: _api_root + "integralmall/integralmall/integral-pay",
        goods_info: _api_root + "integralmall/integralmall/goods-info",
        submit_preview: _api_root + "integralmall/integralmall/submit-preview",
        submit: _api_root + "integralmall/integralmall/submit",
        list: _api_root + "integralmall/integralmall/list",
        revoke: _api_root + "integralmall/integralmall/revoke",
        order_submit: _api_root + "integralmall/integralmall/order-submit",
        confirm: _api_root + "integralmall/integralmall/confirm",
        get_qrcode: _api_root + "integralmall/integralmall/get-qrcode",
        clerk_order_details: _api_root + "integralmall/integralmall/clerk-order-details",
        clerk: _api_root + "integralmall/integralmall/clerk",
        explain: _api_root + "integralmall/integralmall/explain",
        exchange: _api_root + "integralmall/integralmall/exchange",
        register: _api_root + "integralmall/integralmall/register",
        integral_detail: _api_root + "integralmall/integralmall/integral-detail",
        goods_list: _api_root + "integralmall/integralmall/goods-list"
    },
    pond: {
        index: _api_root + "pond/pond/index",
        lottery: _api_root + "pond/pond/lottery",
        prize: _api_root + "pond/pond/prize",
        send: _api_root + "pond/pond/send",
        setting: _api_root + "pond/pond/setting",
        submit: _api_root + "pond/pond/submit",
        qrcode: _api_root + "pond/pond/qrcode"
    },
    bargain: {
        index: _api_root + "bargain/default/index",
        goods: _api_root + "bargain/default/goods",
        bargain_submit: _api_root + "bargain/order/bargain-submit",
        activity: _api_root + "bargain/order/activity",
        bargain: _api_root + "bargain/order/bargain",
        order_list: _api_root + "bargain/order/order-list",
        setting: _api_root + "bargain/default/setting",
        goods_user: _api_root + "bargain/default/goods-user",
        qrcode: _api_root + "bargain/default/qrcode"
    },
    scratch: {
        index: _api_root + "scratch/scratch/index",
        receive: _api_root + "scratch/scratch/receive",
        setting: _api_root + "scratch/scratch/setting",
        prize: _api_root + "scratch/scratch/prize",
        submit: _api_root + "scratch/scratch/submit",
        log: _api_root + "scratch/scratch/log",
        qrcode: _api_root + "scratch/scratch/qrcode"
    },
    lottery: {
        index: _api_root + "lottery/default/index",
        prize: _api_root + "lottery/default/prize",
        detail: _api_root + "lottery/default/detail",
        goods: _api_root + "lottery/default/goods",
        submit: _api_root + "lottery/default/submit",
        qrcode: _api_root + "lottery/default/qrcode",
        setting: _api_root + "lottery/default/setting",
        lucky_code: _api_root + "lottery/default/lucky-code",
        clerk: _api_root + "lottery/default/clerk"
    }
};

module.exports = api;