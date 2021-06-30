import time
from pubnub.pubnub import PubNub
from pubnub.pnconfiguration import PNConfiguration
from pubnub.callbacks import SubscribeCallback

# subscribe_key = 'sub-c-0d1da78e-d997-11eb-8c90-a639cde32e15'
# publish_key = 'pub-c-f2f1b3e4-d996-4429-82e6-316aac08fb2d'

pnconfig = PNConfiguration()
pnconfig.subscribe_key = 'sub-c-0d1da78e-d997-11eb-8c90-a639cde32e15'
pnconfig.publish_key = 'pub-c-f2f1b3e4-d996-4429-82e6-316aac08fb2d'

TEST_CHANNEL = 'TEST_CHANNEL'

class Listener(SubscribeCallback):
    def message(self, pubnub, message_object):
        print(f'\n-- Channel: {message_object.channel} | Message: {message_object.message}')


class PubSub():
    """
    Handles the publish/subscribe layer of the application.
    provides communication between the nodes of the blockchain network.
    """
    def __init__(self):
        self.pubnub = PubNub(pnconfig)
        self.pubnub.subscribe().channels([TEST_CHANNEL]).execute()
        self.pubnub.add_listener(Listener())

    def publish(self, channel, message):
        """
        Publish the Message object to the channel
        """
        self.pubnub.publish().channel(channel).message(message).sync()

def main():
    pubsub = PubSub()
    time.sleep(1)

    pubsub.publish(TEST_CHANNEL, {'foo':'bar'})

if __name__ == '__main__':
    main()