import { generateRandomArray, generateRandomNum } from '../common/rand';
import binarySearch from './src/binary-search-iterator'

function tester(n = 100) {
    let pass = 0;
    for (let i = 0; i < n; i++) {
        let arr = generateRandomArray(10);
        let num = generateRandomNum();
        let exist = binarySearch(arr, num)
        if (exist) {
            pass++;
            console.log(arr, num)
        }
    }
    console.log(n, pass)
}

tester()