module.exports = (fn, ctx) => {
    return function() {
        var args = Array.from(arguments)
        return new Promise( (resolve, reject) => {
            args.push(
              (e, d) => e == null ? resolve(d) : reject(e)
            )
            fn.apply(ctx, args)
        })
    }
}