<template>
    <button :class="buttonClass">
        <slot>test button 按钮</slot>
    </button>
</template>

<script>
export default {
    name: 'TButton',
    props: {
        type: {
        type: String,
        default: 'default',
        validator: value => ['default', 'primary', 'success', 'warning', 'danger'].includes(value)
        }
    },
    computed: {
        buttonClass() {
        return ['t-button', `t-button--${this.type}`];
        }
    }
}
</script>
<style scoped>
.t-button {
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.t-button--default {
  background-color: #ccc;
  color: #333;
}

.t-button--primary {
  background-color: #42b983;
  color: white;
}

.t-button--success {
  background-color: #2ecc71;
  color: white;
}

.t-button--warning {
  background-color: #f39c12;
  color: white;
}

.t-button--danger {
  background-color: #e74c3c;
  color: white;
}
</style>