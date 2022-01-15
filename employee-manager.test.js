const {Builder, Capabilities, By, until} = require('selenium-webdriver')

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
   
})

describe ("Employee Manager Tests", () => {

    it("Can add new employee", async() => {

        let addEmployeeBox = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/ul/li[11]"))

        await addEmployeeBox.click()

        let addNewEmployeeBox = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/ul/li[11]"))

        await addNewEmployeeBox.click()

        let addNewEmployeeNameBox = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div[1]/div/input[1]"))

        await addNewEmployeeNameBox.sendKeys(" Test")

        let addNewEmployeePhoneBox = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div[1]/div/input[2]"))

        await addNewEmployeePhoneBox.sendKeys("")

        let addNewEmployeeTitleBox = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div[1]/div/input[3]"))

        await addNewEmployeeTitleBox.sendKeys("Test")

        let newEmployeeSaveBtn = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div[1]/div/button[1]"))

        await newEmployeeSaveBtn.click()

        let newEmployeeConfirm = await driver.findElement(By.css("")) //trying to find "New Employee Test"
    })
})

// afterAll(async() => {
//     await driver.quit()
// })

#app > div.main-container > div:nth-child(1) > ul > li:nth-child(11)
