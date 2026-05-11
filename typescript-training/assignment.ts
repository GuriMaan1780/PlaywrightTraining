function evaluateLoan(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): void {

    // Display initial message
    console.log("Loan Evaluation Result for: " + customerName);

    // Step 1: Check credit score
    if (creditScore > 750) {
        // If credit score is above 750, the loan is automatically approved
        console.log("Loan Approved: Excellent credit score.");

    } else if (creditScore >= 650) {
        if (income >= 50000) {

            if (isEmployed) {

                if (debtToIncomeRatio < 40.0) {

                    console.log("Loan Approved: Meets all criteria.");
                } else {

                    console.log("Loan Denied: Debt-to-Income ratio is too high.");

                }

            } else {

                console.log("Loan Denied: Customer is not employed.");

            }
        } else {

            console.log("Loan Denied: Income is less than required.");
        }
    } else {
        // If credit score is below 650, deny the loan
        console.log("Loan Denied: Credit score is too low.");
    }



}
evaluateLoan(
    "John Doe",   // customerName
    760,          // creditScore
    55000.0,      // income
    true,         // isEmployed
    45.0          // debtToIncomeRatio
);
export {};


/*Problem 
A bank evealuates loan applicants on the based criteria
  */