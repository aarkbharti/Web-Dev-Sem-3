// create a variable age, initialize with variable age with your own age, if age is greater than or equal to 18, print "You are eligible for voting.", otherwise print "You are not eligible for voting."

public class Main {
    public static void main(String[] args) {
        int age = 20;

        if (age >= 18) {
            System.out.println("You are eligible for voting.");
        } else {
            System.out.println("You are not eligible for voting.");
        }
    }
}

// create a variable number,initialize with any integer number, check whether number is negative, positive or zero and print the result.

public class Main {
    public static void main(String[] args) {
        int number = -5;

        if (number > 0) {
            System.out.println("The number is positive.");
        } else if (number < 0) {
            System.out.println("The number is negative.");
        } else {
            System.out.println("The number is zero.");
        }
    }
}

// create a variable named marks, initialize with your own marks, write a program to print the following message 1.) if marks is less than 40, print fail 2.) if marks greater than equal to 40 and less than 50, print grade c 3.) if marks greater than equal to 50 and less than 60, print grade b 4.) if marks greater than equal to 60 and less than 70, print grade a 5.) if marks greater than equal to 70, print, grade a+

public class Main {
    public static void main(String[] args) {
        int marks = 75;

        if (marks < 40) {
            System.out.println("Fail");
        } else if (marks >= 40 && marks < 50) {
            System.out.println("Grade C");
        } else if (marks >= 50 && marks < 60) {
            System.out.println("Grade B");
        } else if (marks >= 60 && marks < 70) {
            System.out.println("Grade A");
        } else if (marks >= 70) {
            System.out.println("Grade A+");
        }
    }
}

