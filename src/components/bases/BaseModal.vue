<template>
    <transition>
        <div class="modal">
            <div class="modal__content">
                <div class="modal__content--header">
                    <slot name="header"></slot>

                    <span class="u-cursor-pointer" @click="$emit('close')">X</span>
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
    name: 'BaseModal'
}
</script>