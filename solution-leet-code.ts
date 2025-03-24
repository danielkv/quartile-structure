// https://leetcode.com/problems/house-robber/

function rob(nums: number[]): number {
    let temp = 0

    return nums.reduce((acc, n) => {
        const sum = Math.max(n + temp, acc);

        temp = acc;
        
        return sum
    }, 0)
}