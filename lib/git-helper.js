const { exec }= require('child_process')

module.exports = {
    getDiff(commit, cwd = process.cwd()) {
        return new Promise((resolve, reject) => {
            exec(
                `git diff ${commit}~ ${commit} --raw -p -U0`, {
                cwd,
                maxBuffer: 100 * 1024 * 1024
            }, (err, stdout, stderr) => {
                if (err) return reject(err)
                resolve(stdout)
            })
        })
    },
    getCommits(author, cwd = process.cwd()) {
        return new Promise((resolve, reject) => {
            exec(
                `git log --author "${author}" --oneline`, {
                cwd,
                maxBuffer: 100 * 1024 * 1024
            }, (err, stdout, stderr) => {
                if (err) return reject(err)
                resolve(
                    stdout
                        .split(/[\n\r]+/g)
                        .map(line => line.slice(0, line.indexOf(' ')))
                        .filter($ => $)
                )
            })
        })
    }
}