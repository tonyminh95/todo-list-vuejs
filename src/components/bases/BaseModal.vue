<template>
    <transition>
        <div class="modal">
            <div class="modal__content">
                <div class="modal__content--header">
                    <h2 class="text-green">Create</h2>

                    <span class="u-cursor-pointer">X</span>
                </div>

                <div>
                    <div class="form">
                        <div class="form__row">
                            <label>title</label>
                            <input type="text" class="form__input" placeholder="Enter task title">
                        </div>
                        <div class="form__row">
                            <label>description</label>
                            <textarea rows="5" class="form__input" placeholder="Enter some description about the task"></textarea>
                        </div>
                        <div class="form__row">
                            <label>deadline</label>
                            <input type="text" class="form__input">
                        </div>
                        <div class="form__row">
                            <label>status</label>
                            <input type="text" class="form__input">
                        </div>
                    </div>
                </div>

                <div>
                    <slot name="footer"></slot>
                </div>

                <!-- <div class="modal__content--header" :class="`modal__content--header-${modal_type}`">
                    <slot name="header"></slot>

                    <fa-icon :icon="['fas', 'times']" @click="$emit('close')"></fa-icon>
                </div>

                <div>
                    <slot name="body"></slot>
                </div>

                <div>
                    <slot name="footer"></slot>
                </div> -->
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