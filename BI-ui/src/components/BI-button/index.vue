<template>
		<button :class="classObject" @click="emitClick">
			<slot>确定</slot>
		</button>
</template>

<script>
	export default {
		name: 'a-button',
		props: {
			size: {
				type: String,
				default: 'normal'
			},
			disabled: {
				type: Boolean,
				default: false
			},
			hot: {
				type: Boolean,
				default: false
			}

		},
		data() {
			return {
				classObject: {
					'BI--btn': true,
					'BI--btn--big': this.size === 'big',
					'BI--btn--bigger': this.size === 'bigger',
					'BI--btn--disabled': this.disabled,
					'BI--btn--hot': this.hot
				}
			}
		},
		methods: {
			emitClick() {
				this.$emit('click');
			}
		}
	}
</script>

<style lang="less">
	@import '../common.less';
	@b btn:hover {
		background: @mainHoverColor;
		border: 1px solid @mainHoverColor;
		cursor: pointer;
	}
	@b btn {
		height: 30px;
		line-height: 30px;
		min-width: 45px;
		padding: 0 10px;
		font-size: 12px;
		background: @mainColor;
		border-radius: 2px;
		color:#fff;
		border: 1px solid @mainColor;

		@m big {
			height:40px;
			line-height: 40px;
			min-width:60px;
			padding: 0 15px;
			font-size: 14px;
		}

		@m bigger {
			height:60px;
			line-height: 60px;
			min-width: 160px;
			font-size: 24px;
			padding:0 20px;
			border-radius: 4px;
		}

		@m disabled{
			background:@disabledColor;
			color:#b2b2b2;
			border:1px solid #ccc;
		}

		@m disabled:hover {
			background:@disabledColor;
			border:1px solid #ccc;
		}

		@m hot {
			background:@assistColor;
			border:1px solid @assistColor;
		}

		@m hot:hover {
			background: @assistHoverColor;
			border:1px solid @assistHoverColor;
		}
	}
</style>