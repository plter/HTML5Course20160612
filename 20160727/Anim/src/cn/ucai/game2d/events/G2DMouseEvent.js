/**
 * Created by plter on 7/26/16.
 */

import G2DEvent from "cn/ucai/game2d/events/G2DEvent";

class G2DMouseEvent extends G2DEvent {
    constructor(type, data) {
        super(type, data);
    }
}

G2DMouseEvent.CLICK = "click";

export default G2DMouseEvent;