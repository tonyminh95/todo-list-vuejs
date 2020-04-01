<template>
    <transition name="modal">
        <div class="modal">
            <div class="modal__content">
                <div class="modal__content--header" :class="`modal__content--header-${modal_type}`">
                    <slot name="header"></slot>

                    <fa-icon :icon="['fas', 'times']" @click="$emit('close')"></fa-icon>
                </div>

                <div>
                    <slot name="body"></slot>
                </div>

                <div>
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
            modal_type: {
                type: String,
                default: 'default'
            }
        }
    }
</script>