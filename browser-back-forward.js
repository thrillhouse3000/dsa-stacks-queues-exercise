

class ForwardStack {
    //constructor for linked list
    push() {
        //add to the end of the stack
    }
    pop() {
        //remove from the end of the stack
        //return value
    }
    traverse() {
        //move to next node
    }
    peek(){
        //look at the end of the stack
    }
    isEmpty(){
        //check if this is empty
    }
}

class BackwardStack {
    //constructor for linked list
    unshift() {
        //adds to front of stack
    }
    shift() {
        //removes from front of stack
        //return value
    }
    travers() {
        //move to next node
    }
    peek() {
        //look at front of stack
    }
    isEmpty() {
        //check if empty
    }
}

//Forward Stack
// Google --> Yahoo --> Twitter
//Backward Stack
// Twitter --> Yahoo --> Google

//When forward is clicked we pop() from the forward stack and unshift that node to the front of the backward stack

//When backward is clicked we traverse to next, shift() the backward Stack and push that node to the end of the forward stack