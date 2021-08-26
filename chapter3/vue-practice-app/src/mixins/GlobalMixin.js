const GlobalMixin = {
    methods: {
        printLifecycleLog(componentName, lifecycle) {
            console.log(`${componentName}::${lifecycle}`)
        }
    }
}

export default GlobalMixin;