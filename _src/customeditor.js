window.UE.commands['morefun'] = {
    execCommand: function () {
        console.log("点击了更多按钮");
        return true;
    },
    queryCommandState: function () {}
};
window.UE.commands['hidemore'] = {
    execCommand: function () {
        console.log("点击了收起按钮");
        return true;
    },
    queryCommandState: function () {}
};
window.UE.commands['insertarticle'] = {
    execCommand: function () {
        console.log("点击了插入文章按钮");
        return true;
    },
    queryCommandState: function () {}
};
var editorui = baidu.editor.ui;
editorui.hidemore = function (editor) {
    var cmd = "hidemore";
    var ui = new editorui.Button({
        className: 'edui-for-' + cmd,
        title: editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '',
        onclick: function () {
          editor.execCommand(cmd);
        },
        theme: editor.options.theme,
        showText: false
    });
    editorui.buttons[cmd] = ui;
    editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
        var state = editor.queryCommandState(cmd);
        if (state == -1) {
            ui.setDisabled(true);
            ui.setChecked(false);
        } else {
            if (!uiReady) {
                ui.setDisabled(false);
                ui.setChecked(state);
            }
        }
    });
    return ui;
};

editorui.morefun = function (editor) {
    var cmd = "morefun";
    var ui = new editorui.Button({
        className: 'edui-for-' + cmd,
        title: editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '',
        onclick: function () {
          editor.execCommand(cmd);
        },
        theme: editor.options.theme,
        showText: false
    });
    editorui.buttons[cmd] = ui;
    editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
        var state = editor.queryCommandState(cmd);
        if (state == -1) {
            ui.setDisabled(true);
            ui.setChecked(false);
        } else {
            if (!uiReady) {
                ui.setDisabled(false);
                ui.setChecked(state);
            }
        }
    });
    return ui;
};

editorui.insertarticle = function (editor) {
    var cmd = "insertarticle";
    var ui = new editorui.Button({
        className: 'edui-for-' + cmd,
        title: editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '',
        onclick: function () {
          editor.execCommand(cmd);
        },
        theme: editor.options.theme,
        showText: false
    });
    editorui.buttons[cmd] = ui;
    editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
        var state = editor.queryCommandState(cmd);
        if (state == -1) {
            ui.setDisabled(true);
            ui.setChecked(false);
        } else {
            if (!uiReady) {
                ui.setDisabled(false);
                ui.setChecked(state);
            }
        }
    });
    return ui;
};
