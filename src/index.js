module.exports = (fn, ctx) => {
    return function() {
        var args = Array.from(arguments)
        return new Promise( (resolve, reject) => {
          args.push((err, data) => {
              if (err == null) resolve(data)
              else reject(err)
          })
          fn.apply(ctx, args)
        })
    }
}