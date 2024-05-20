import { EventEmitter } from '@billjs/event-emitter';
import { Events } from 'Constants/events';

export function makeHandleEvents(eventEmitter: EventEmitter, close: () => void) {
  return function handleEvents(event: MessageEvent<{ event_id: Events; data: unknown }>) {
    if (event?.data?.event_id) {
      // eslint-disable-next-line default-case
      switch (event.data.event_id) {
        case Events.TRANSAK_WIDGET_INITIALISED: {
          eventEmitter.fire(Events.TRANSAK_WIDGET_INITIALISED, {
            eventName: Events.TRANSAK_WIDGET_INITIALISED,
            status: true,
          });

          break;
        }

        case Events.TRANSAK_ORDER_CREATED: {
          eventEmitter.fire(Events.TRANSAK_ORDER_CREATED, {
            eventName: Events.TRANSAK_ORDER_CREATED,
            status: event.data.data,
          });

          break;
        }

        case Events.TRANSAK_ORDER_SUCCESSFUL: {
          eventEmitter.fire(Events.TRANSAK_ORDER_SUCCESSFUL, {
            eventName: Events.TRANSAK_ORDER_SUCCESSFUL,
            status: event.data.data,
          });

          break;
        }

        case Events.TRANSAK_ORDER_CANCELLED: {
          eventEmitter.fire(Events.TRANSAK_ORDER_CANCELLED, {
            eventName: Events.TRANSAK_ORDER_CANCELLED,
            status: event.data.data,
          });

          break;
        }

        case Events.TRANSAK_ORDER_FAILED: {
          eventEmitter.fire(Events.TRANSAK_ORDER_FAILED, {
            eventName: Events.TRANSAK_ORDER_FAILED,
            status: event.data.data,
          });

          break;
        }

        case Events.TRANSAK_WALLET_REDIRECTION: {
          eventEmitter.fire(Events.TRANSAK_WALLET_REDIRECTION, {
            eventName: Events.TRANSAK_WALLET_REDIRECTION,
            status: event.data.data,
          });

          break;
        }

        case Events.TRANSAK_WIDGET_CLOSE: {
          eventEmitter.fire(Events.TRANSAK_WIDGET_CLOSE, {
            eventName: Events.TRANSAK_WIDGET_CLOSE,
            status: true,
          });

          close();

          break;
        }

        case Events.TRANSAK_USER_INFO_RECEIVED: {
          eventEmitter.fire(Events.TRANSAK_USER_INFO_RECEIVED, {
            eventName: Events.TRANSAK_USER_INFO_RECEIVED,
            status: event.data.data,
          });

          break;
        }
      }
    }
  };
}
