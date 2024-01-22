/**
 * Event
 *
 * Represents an "Business Event" in the system
 *
 * They are serialisable (only contain data)
 */
type ExampleEventData = {
    message: string
};

export class ExampleEvent {
    constructor(
        public readonly data: ExampleEventData,
        public readonly timestamp: Date
    ) {}

    static create(data: ExampleEventData) {
        return new ExampleEvent(data, new Date());
    }
}
