//The same window broadcast synchronizes the data of each window

import store from '@/store/index'
import { BroadcastChannel } from 'broadcast-channel';

export const useBroadCast = () => {
    const broad = new BroadcastChannel('WormHoles-Wallet')
    // broadcast

    const postMessage = (params: any) => {
        try {
            broad.postMessage(params)
        } catch (err) {
            console.warn('The browser does not support BroadcastChannel')
        }
    }
    // Wallet update event
    const handleUpdate = () => {
        postMessage({ action: 'wromHoles-update', id: store.state.system.conversationId })
    }
    return {
        postMessage,
        handleUpdate,
        broad
    }
}

function judgeClient() {
    let client = '';
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        client = 'IOS';
    } else if (/(Android)/i.test(navigator.userAgent)) {
        client = 'Android';
    } else {
        client = 'PC';
    }
    return client;
}