
export function Sieve_of_eratosthenes(demo,animations) {
  animations.push([0,'red']);
  animations.push([1,'red']);

  let n = demo.length;
  for(let i=2;i<n;i++){
    if(Number(demo[i]) === i){
        animations.push([i,'green']);
        for(let j = 2*i;j<n;j+=i){
            animations.push([j,'red']);
            demo[j] = i;
        }
    }
  }
}
