<template>
    <transition name="modal">
        <div class="modal-container">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header"></slot>
                </div>

                <div class="modal-body">
                    <slot name="body"></slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Modal'
    }
</script>