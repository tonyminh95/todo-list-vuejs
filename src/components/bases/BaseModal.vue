<template>
    <transition name="modal">
        <div class="modal">
            <div class="modal__content">
                <div :class="`modal__content__header-${modalType}`">
                    <slot name="header"></slot>
                </div>

                <div class="modal__content__body">
                    <slot name="body"></slot>
                </div>

                <div class="modal__content__footer u-text-right">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'BaseModal',

        props: {
            modalType: {
                type: String,
                default: 'default'
            }
        }
    }
</script>