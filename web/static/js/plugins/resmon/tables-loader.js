// facili - easy info tool web frotend

// Copyright (C) 2018 Siddharudh P T

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 2.1 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.

// You should have received a copy of the GNU Lesser General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>


function updateLiveTables(result) {
    var top5cpu = result['resmon.live.top5cpu'];
    if (top5cpu != undefined) {
        $('#top5-cpu tbody').empty();
        top5cpu.forEach(function(row, i) {
            $('#top5-cpu tbody').append('<tr><td>' + row[0] + '</td><td>' + row[1] + '</td><td>' + row[2] + '</td><td style="text-align: right;">' + row[3] + '</td></tr>');
        });
    }

    var top5mem = result['resmon.live.top5mem'];
    if (top5mem != undefined) {
        $('#top5-mem tbody').empty();
        top5mem.forEach(function(row, i) {
            $('#top5-mem tbody').append('<tr><td>' + row[0] + '</td><td>' + row[1] + '</td><td>' + row[2] + '</td><td>' + row[3] + '</td></tr>');
        });
    }

    var top5io = result['resmon.live.top5io'];
    if (top5io) {
        $('#top5-io tbody').empty();
        top5io.forEach(function(row, i) {
            $('#top5-io tbody').append('<tr><td>' + row[0] + '</td><td>' + row[1] + '</td><td>' + row[2][0] + '</td><td>' + row[2][1] + '</td></tr>');
        });
    }
}
