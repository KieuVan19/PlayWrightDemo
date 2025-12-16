import {test, expect} from '@playwright/test'

test("This test is not visible to test runer", async ()=>{
    console.log("This test is ignored by defineConfig. If you see this line, check your config again!");
    
})