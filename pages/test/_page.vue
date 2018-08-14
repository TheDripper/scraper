<template>
<h1>{{ data }}</h1>
</template>
<script>
export default {
	asyncData(context) {
		return {
			data: context.params.page
		}
	}
}
</script>

