const findInfinitynodes = (history) => {
    const rewardsPossibles = [
        560
    ]
    const infinityNodes = []
    history.forEach(line => {
        if (rewardsPossibles.includes(line.amount) && line.type === 'Mined') {
            const isAlreadyHere = infinityNodes.filter(i => i.address === line.address).length === 0 ? false : true
            if (!isAlreadyHere) {
                infinityNodes.push(
                    {
                        address: line.address,
                        type: rewardsPossibles.indexOf(line.amount) === 0 ? 'Mini' :
                            rewardsPossibles.indexOf(line.amount) === 1 ? 'Mid' :
                                rewardsPossibles.indexOf(line.amount) === 2 ? 'Big' : '',
                        history: [line]
                    }
                )
            } else {
                infinityNodes.forEach(node => {
                    if (node.address === line.address) {
                        node.history.push(line)
                    }
                })
            }
        }
    })
    return infinityNodes
}

export default findInfinitynodes