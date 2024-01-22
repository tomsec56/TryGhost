/**
 * Entity
 *
 * Represents a "Business Object" in the system
 *
 *  - As much business logic as possible should be here
 *  - Its interface should describe what it is and what it can do/you can do to it.
 *  - Handles the creation of events related to the entity
 */
import {ExampleEvent} from './example.event';

export class Greeting {
    constructor(
        private greeting: string,
        protected events: ExampleEvent[]
    ) {}

    greet(recipient: string) {
        let message;
        if (recipient.trim() === 'world') {
            message = 'Hello, world!';
        } else {
            message = `${this.greeting}, ${recipient.trim()}.`;
        }
        this.events.push(ExampleEvent.create({
            message
        }));
        return message;
    }

    /** These are not specific to this entity and should be abstracted away */
    /** They are static methods so that they can have access to the protected events */
    static getEvents(entity: Greeting) {
        return entity.events;
    }

    static clearEvents(entity: Greeting) {
        entity.events = [];
    }
}
