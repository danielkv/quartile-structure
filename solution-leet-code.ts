// https://leetcode.com/problems/house-robber/

function rob(nums: number[]): number {
    let temp = 0

    return nums.reduce((acc, n) => {
        const sum = Math.max(n + temp, acc);

        temp = acc;
        
        return sum
    }, 0)
}

/*
I was trying to jump one house, but it's not the best strategy. Might work for a couple of cases, but not for all. Also tried to test Odds and Evens, but also doesn't work for all cases.

Here's how this works:

The approach was to care about the previous house and the house before that. Getting only the highest amount. 
Doing that I garantee that I'm not getting two adjacent houses.

The code uses reduce() to go through each house and keeps track of two things:
- temp: how much money we could get if we robbed 2 houses ago
- acc: how much we got from the previous best robbery plan

For each house, we have two options:
1. Rob THIS house + what we got from 2 houses ago (n + temp)
2. Skip this house and keep what we had before (acc)

We pick whichever gives the highest amount!
*/

