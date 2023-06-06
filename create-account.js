function createAccount(pin, amount = 0) {
    // this.pin = pin;
    // this.amount = amount; 

    return{
        checkBalance(inputPin){
            if(inputPin === pin){
                return `$${amount}`
            }
            else
            return "Invalid PIN.";
        },

        deposit(inputPin, depositAmt){
            if(inputPin === pin){
                amount += depositAmt
                return `Succesfully deposited $${depositAmt}. Current balance: $${amount}.`
            }
            else
            return "Invalid PIN."
        },
        withdraw(inputPin, withDrawAmt){
            if(inputPin === pin){
                if(withDrawAmt > amount){
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                }
                amount = amount - withDrawAmt
                return `Succesfully withdrew $${withDrawAmt}. Current balance: $${amount}.`
            }
            else
            return "Invalid PIN."
    },
        changePin(inputPin, newPin){
            if(inputPin === pin){
                pin = newPin
                return "PIN successfully changed!"
            }
            else
            return "Invalid PIN."
        }
    }

}
    // Write a function called createAccount which creates a bank account given a PIN number and an initial deposit amount. 
    // The return value should be an object with four methods on it:

    // checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
    // deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
    // withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
    // changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)





module.exports = { createAccount }
