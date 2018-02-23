<template>
	<div class="BI--confirm" v-show="show">
		<div class="BI--confirm__container">
			<div class="BI--confirm__container__body"><slot>你确定吗？</slot></div>
			<div class="BI--confirm__container__footer">
				<BI-button @click="cancel" class="BI--confirm__container__cancel">{{cancelText}}</BI-button>
				<BI-button @click="confirm">{{confirmText}}</BI-button>
			</div>
		</div>
	</div>
</template>

<script>
	import BIButton from '../BI-button'
	export default {
		name: 'a-confirm',
		components: {
			BIButton
		},
		props: {
			show: {
				type: Boolean,
				required: true,
				default: false
			},
			confirmText: {
				type: String,
				default: '确定'
			},
			cancelText: {
				type: String,
				default: '取消'
			}
		},
		methods: {
			confirm() {
				this.$emit('update:show', false);
				this.$emit('confirm');
			},
			cancel() {
				this.$emit('update:show', false);
				this.$emit('cancel');
			}
		}
	}
</script>
<style lang="less">
	@b confirm {
		position: fixed;
		left:0;
		right:0;
		top:0;
		bottom:0;
		background: rgba(33,33,33,0.3);

		@e container{
			width:260px;
			height: 140px;
			text-align: center;
			color:#000;
			background:#fff;
			border:1px solid #fff;
			border-radius: 4px;
			position:fixed;
			left:50%;
			top:50%;
			margin-left: -130px;
			margin-top: -70px;

			@e body {
				position:absolute;
				top:50%;
				left:50%;
				transform: translate(-50%, -50%);
				margin-top: -10px;
			}
			
			@e footer {
				position:absolute;
				bottom:10px;
				width:100%;
				text-align:center;
			}
			@e cancel {
				margin-right: 20px;
			}
		}
	}
</style>