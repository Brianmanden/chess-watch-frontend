import time

# WS server example

import asyncio
import websockets


"""
 type  := [ BEGIN, END, NEW, PUSH ]

 BEGIN := 'BEGIN'
 END   := 'END'
 NEW   := 'NEW' ID
 PUSH  := 'PUSH' <ID>
 ID    := 16 byte string
"""

class BaseMessage:
  subclasses = {}

  def __init_subclass__(cls, **kwargs):
    super().__init_subclass__(**kwargs)
    cls.subclasses[cls._MESSAGE_TYPE] = cls

  @classmethod
  def create(cls, msg):
    params = msg.split(' ')
    if not len(params) > 0:
      raise ValueError('No message type')

    message_type = params.pop(0)

    if message_type not in cls.subclasses:
      raise ValueError('Bad message type {}'.format(message_type))

    return cls.subclasses[message_type](params)


class BeginMessage(BaseMessage):
  _MESSAGE_TYPE = 'BEGIN'

  def __init__(self, params):
     pass

class EndMessage(BaseMessage):
  _MESSAGE_TYPE = 'END'

  def __init__(self, params):
     pass

class NewMessage(BaseMessage):
  _MESSAGE_TYPE = 'NEW'

  def __init__(self, params):
     pass

class PushMessage(BaseMessage):
  _MESSAGE_TYPE = 'PUSH'

  def __init__(self, params):
     pass

file = open("data.txt", "r")
msgs = file.read().splitlines()
file.close()

print(msgs)

async def hello(websocket, path):
    print(msgs)
    for l in msgs:
      print(l)
      print( type(BaseMessage.create(l)) )
      await websocket.send(l)
      time.sleep(2)

print("A")
start_server = websockets.serve(hello, None, 8765)
print("B")
asyncio.get_event_loop().run_until_complete(start_server)
print("C")
asyncio.get_event_loop().run_forever()
print("D")
